
import { getUserAppointments } from '@/actions/appointment'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from '@/actions/dashboard'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import CalIcon from '@/icons/cal-icon'
import EmailIcon from '@/icons/email-icon'
import PersonIcon from '@/icons/person-icon'
import { TransactionsIcon } from '@/icons/transactions-icon'
import { DollarSign } from 'lucide-react'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const clients = await getUserClients()
  const sales = await getUserBalance()
  const bookings = await getUserAppointments()
  const plan = await getUserPlanInfo()
  const transactions = await getUserTransactions()
  const products = await getUserTotalProductPrices()
  const projects = [
    {
    title: "LLaMA 3.1 - Meta's largest open-source AI model with 65 billion parameters, ideal for customer service automation.",
    description: "High performance for complex queries.",
    link: "https://meta.com/llama"
    },
    {
    title: "Mistral - A 7 billion parameter model excelling in instruction-following tasks, perfect for self-hosting. ",
    description: "Efficient for real-time applications.",
    link: "https://mistral.ai"
    },
    {
    title: "Orca - Microsoft's 13 billion parameter model achieving performance on par with GPT-4 for many tasks.",
    description: "Runs on consumer hardware.",
    link: "https://microsoft.com/orca"
    },
    {
    title: "PaLM - Google's 540 billion parameter model designed for complex reasoning tasks and coding. ",
    description: "High, requires substantial resources.",
    link: "https://google.com/palm"
    },
    {
    title: "Phi-1 - Microsoft's 1.3 billion parameter model specializing in Python coding with high-quality training.",
    description: "Limited but efficient for specific tasks.",
    link: "https://microsoft.com/phi-1"
    },
    {
    title: "StableLM - Stability AI's models range from 3 to 175 billion parameters, focusing on transparency and accessibility. ",
    description: "Varies by model size.",
    link: "https://stability.ai/stablelm"
    }
    ];
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0">
        <div className="flex gap-5 flex-wrap">
          {/* changes: you can replace these cards with hove-effect cards */}
          <DashboardCard
            value={clients || 0}
            title="Potential Clients"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={products! * clients! || 0}
            sales
            title="Potential sales"
            icon={<DollarSign />}
          />
          
        
           <DashboardCard
            value={sales || 0}
            sales
            title="Emails cost Incurred "
            icon={<DollarSign />}
            
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10">
          <div>
            <div>
              <h2 className="font-bold text-2xl">Plan Usage</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>
            <PlanUsage
              plan={plan?.plan!}
              credits={plan?.credits || 0}
              domains={plan?.domains || 0}
              clients={clients || 0}
            />
          </div>
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              <p className="text-sm">See more</p>
            </div>
            {transactions &&
              transactions.data.map((transaction) => (
                <div
                  className="flex gap-3 w-full justify-between items-center border-b-2 py-5"
                  key={transaction.id}
                >
                  <p className="font-bold">
                    {transaction.calculated_statement_descriptor}
                  </p>
                  <p className="font-bold text-xl">
                    ${transaction.amount / 100}
                  </p>
                </div>
              ))}
                 <Separator orientation="horizontal" />
            <div className="w-full flex justify-between items-start mt-5"> 
            <HoverEffect items={projects} />
               </div>

         
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
