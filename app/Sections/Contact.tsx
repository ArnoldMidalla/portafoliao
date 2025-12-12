"use client";

import Link from "next/link";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

function Details({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) {
  return (
    <div className="text-sm">
      <p className="opacity-70">{title}</p>
      <Link
        href={link}
        className="font-medium hover:underline duration-300 cursor-none hover:rotate-1 hover:scale-105"
      >
        {subtitle}
      </Link>
    </div>
  );
}

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});
export default function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: any) {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent!");
      form.reset();
    } else {
      toast.error("Something went wrong. Try again.");
    }
  }

  return (
    <div className="min-w-dvw bg-white flex justify-center font-dm md:py-8 border-b-2 ">
      <main className="w-5xl min-h-112 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-full flex flex-col items-center pt-8 md:border-2 border-black">
          <div className="w-full px-4 h-full space-y-8">
            <p className="text-3xl font-semibold tracking-tighter">
              Lets get in touch
            </p>
            <p className="text-xl font-normal tracking-tight">
              Dont be afraid to say hello
            </p>
            <div className="flex flex-col gap-2">
              <Details
                title="Phone"
                subtitle="+2348065088147"
                link={"tel:+2348060588147"}
              />
              <Details
                title="Email"
                subtitle="midallaarnold@gmail.com"
                link={"mailto:midallaarnold@gmail.com"}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 h-full flex flex-col items-center bg-neutral-900 text-white py-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-between h-full w-full max-w-sm"
            >
              <p className="text-xl font-medium">Contact</p>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="rounded-none cursor-none border-lime-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        className="rounded-none cursor-none border-lime-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="How can I help you?"
                        {...field}
                        className="rounded-none cursor-none border-lime-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full text-black bg-lime-300 rounded-none"
                disabled={loading}
              >
                {loading ? "Sending" : "Send Message"}
                {loading && <Spinner />}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
