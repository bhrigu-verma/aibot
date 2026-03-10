#!/usr/bin/env python3
"""
Fetch all Y Combinator startups from W24, S24, W25, S25 batches
using the official YC API and output as structured data.
"""

import json
import urllib.request
import urllib.error
import csv
import time
import sys

API_BASE = "https://api.ycombinator.com/v0.1/companies"
BATCHES = ["W24", "S24", "W25", "S25"]

def fetch_page(batch, page):
    url = f"{API_BASE}?batch={batch}&page={page}"
    try:
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode())
    except Exception as e:
        print(f"  Error fetching {url}: {e}", file=sys.stderr)
        return None

def fetch_all_companies(batch):
    all_companies = []
    page = 1
    print(f"Fetching batch {batch}...", file=sys.stderr)
    
    while True:
        data = fetch_page(batch, page)
        if not data or not data.get("companies"):
            break
        
        companies = data["companies"]
        all_companies.extend(companies)
        total_pages = data.get("totalPages", 1)
        print(f"  Page {page}/{total_pages} - got {len(companies)} companies (total: {len(all_companies)})", file=sys.stderr)
        
        if page >= total_pages:
            break
        page += 1
        time.sleep(0.3)  # Be polite to the API
    
    return all_companies

def main():
    all_data = {}
    grand_total = 0
    
    for batch in BATCHES:
        companies = fetch_all_companies(batch)
        all_data[batch] = companies
        grand_total += len(companies)
        print(f"  ✓ {batch}: {len(companies)} companies\n", file=sys.stderr)
        time.sleep(0.5)
    
    print(f"\nTotal companies across all batches: {grand_total}\n", file=sys.stderr)
    
    # Output as JSON for further processing
    output = {}
    for batch in BATCHES:
        output[batch] = []
        for c in all_data[batch]:
            output[batch].append({
                "name": c.get("name", ""),
                "batch": c.get("batch", batch),
                "yc_url": c.get("url", ""),
                "website": c.get("website", ""),
                "description": c.get("oneLiner", ""),
                "status": c.get("status", "Unknown"),
                "industries": c.get("industries", []),
                "team_size": c.get("teamSize", 0),
                "locations": c.get("locations", []),
                "tags": c.get("tags", []),
            })
    
    # Write JSON output
    with open("/Users/bhriguverma/projects/aibot/data/yc_batches_all.json", "w") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    # Write CSV output
    with open("/Users/bhriguverma/projects/aibot/data/yc_batches_all.csv", "w", newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["Company Name", "Batch", "YC Profile URL", "Website", "Description", "Status", "Industries", "Team Size", "Location"])
        for batch in BATCHES:
            for c in output[batch]:
                writer.writerow([
                    c["name"],
                    c["batch"],
                    c["yc_url"],
                    c["website"],
                    c["description"],
                    c["status"],
                    "; ".join(c["industries"]),
                    c["team_size"] or "",
                    "; ".join(c["locations"]) if c["locations"] else "",
                ])
    
    # Write Markdown summary
    with open("/Users/bhriguverma/projects/aibot/data/YC_BATCHES_COMPREHENSIVE_LIST.md", "w") as f:
        f.write("# Comprehensive List of Y Combinator Startups (W24, S24, W25, S25)\n\n")
        f.write(f"**Total Companies: {grand_total}**\n\n")
        f.write(f"**Data Source:** [YC Official API](https://api.ycombinator.com/v0.1/companies)  \n")
        f.write(f"**Generated:** March 2026  \n\n")
        f.write("---\n\n")
        
        batch_names = {
            "W24": "Winter 2024 (W24)",
            "S24": "Summer 2024 (S24)",
            "W25": "Winter 2025 (W25)",
            "S25": "Summer 2025 (S25)",
        }
        
        for batch in BATCHES:
            companies = output[batch]
            f.write(f"## {batch_names[batch]} — {len(companies)} Companies\n\n")
            f.write(f"| # | Company | Description | Website | Status | Industries |\n")
            f.write(f"|---|---------|-------------|---------|--------|------------|\n")
            
            for i, c in enumerate(companies, 1):
                name_link = f"[{c['name']}]({c['yc_url']})"
                website_link = f"[Link]({c['website']})" if c['website'] else "N/A"
                desc = c['description'][:80] + "…" if len(c['description']) > 80 else c['description']
                # Escape pipe characters in description
                desc = desc.replace("|", "\\|")
                industries = ", ".join(c['industries']) if c['industries'] else "—"
                f.write(f"| {i} | {name_link} | {desc} | {website_link} | {c['status']} | {industries} |\n")
            
            f.write(f"\n---\n\n")
        
        # Summary statistics
        f.write("## Summary Statistics\n\n")
        for batch in BATCHES:
            companies = output[batch]
            active = sum(1 for c in companies if c['status'] == 'Active')
            inactive = sum(1 for c in companies if c['status'] == 'Inactive')
            acquired = sum(1 for c in companies if c['status'] == 'Acquired')
            
            f.write(f"### {batch_names[batch]}\n")
            f.write(f"- **Total:** {len(companies)}\n")
            f.write(f"- **Active:** {active}\n")
            if inactive: f.write(f"- **Inactive:** {inactive}\n")
            if acquired: f.write(f"- **Acquired:** {acquired}\n")
            
            # Industry breakdown
            industry_counts = {}
            for c in companies:
                for ind in c['industries']:
                    industry_counts[ind] = industry_counts.get(ind, 0) + 1
            
            sorted_industries = sorted(industry_counts.items(), key=lambda x: -x[1])[:10]
            f.write(f"- **Top Industries:** {', '.join(f'{k} ({v})' for k, v in sorted_industries)}\n\n")
        
        f.write("\n---\n\n")
        f.write("## Verification Sources\n\n")
        f.write("- **Primary:** [YC Official Company Directory](https://www.ycombinator.com/companies)\n")
        f.write("- **API Endpoint:** `https://api.ycombinator.com/v0.1/companies?batch=<BATCH>`\n")
        f.write("- **Blog Posts:**\n")
        f.write("  - [Meet the YC Winter 2024 Batch](https://www.ycombinator.com/blog/meet-the-yc-winter-2024-batch)\n")
        f.write("  - [Meet the YC Summer 2024 Batch](https://www.ycombinator.com/blog/meet-the-yc-summer-2024-batch)\n")
        f.write("  - [Meet the YC Winter 2025 Batch](https://www.ycombinator.com/blog/meet-the-yc-winter-2025-batch)\n")
        f.write("  - [Meet the YC Summer 2025 Batch](https://www.ycombinator.com/blog/meet-the-yc-summer-2025-batch)\n")

    print("Files written:", file=sys.stderr)
    print("  - data/yc_batches_all.json", file=sys.stderr)
    print("  - data/yc_batches_all.csv", file=sys.stderr)
    print("  - data/YC_BATCHES_COMPREHENSIVE_LIST.md", file=sys.stderr)

if __name__ == "__main__":
    main()
