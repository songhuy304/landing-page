"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

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
import { useTranslations } from "next-intl";

type ContactFormValues = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const t = useTranslations("HomePage.contact");
  const form = useForm<ContactFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  // Handle submit event
  const onSubmit = (values: ContactFormValues) => {
    // In a real app, send values to your API endpoint
    console.log("contact form submit", values);
  };

  return (
    <section className="container mx-auto px-4 py-16" id="contact">
      <div className="mx-auto max-w-2xl" data-aos="fade-up">
        <h2 className="mb-2 text-center text-3xl font-semibold">
          {t("sectionTitle")}
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          {t("subtitle")}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              rules={{ required: t("errors.fullNameRequired") }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("fullName")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("fullNamePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: t("errors.emailRequired"),
                pattern: {
                  value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                  message: t("errors.emailInvalid"),
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      {...field}
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
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder={t("messagePlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full">
                {t("submit")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
