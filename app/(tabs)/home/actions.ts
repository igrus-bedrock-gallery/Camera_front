"use server";
import { redirect } from "next/navigation";

export async function sendFile(prevState: any, formData: FormData) {
  const data = {
    setting: formData.get("setting"),
  };
}
