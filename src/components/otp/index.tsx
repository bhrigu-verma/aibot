import React from 'react'
import { InputOTP, InputOTPSlot } from '../ui/input-otp'

type Props = {
  otp: string
  setOtp: React.Dispatch<React.SetStateAction<string>>
}

const OTPInput = ({ otp, setOtp }: Props) => {
  const generateOTPSlots = (numSlots) => {
    return Array.from({ length: numSlots }, (_, index) => (
      <div key={index}>
        <InputOTPSlot index={index} />
      </div>
    ));
  };

  return (
    <InputOTP
      maxLength={6}
      value={otp}
      onChange={(otp) => setOtp(otp)}
    >
      <div className="flex gap-3">
        {generateOTPSlots(6)}
      </div>
    </InputOTP>
  )
}

export default OTPInput

