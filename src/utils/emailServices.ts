import emailjs from "emailjs-com";

export const send_Email=async(templateParams:Record<string,string>)=>{
   try {
    const serviceID=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const Public_Key=process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const respone= await emailjs.send(serviceID,templateID,templateParams, Public_Key);

    return respone;
   } catch (error) {
    console.log("sorry its Failed",error);
    throw error;
   }
}