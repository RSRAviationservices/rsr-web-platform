"use client";

import React, { useMemo } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import countryList from "country-list";
import { useContactForm } from "../form/useContactForm";

export default function ContactForm() {
  const { form, onSubmit, isLoading } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = form;
  const countries = useMemo(() => countryList.getData(), []);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="rounded-md bg-zinc-50 p-5 ring-1 ring-zinc-900/5 md:rounded-2xl md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Send us a message
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                autoComplete="given-name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                autoComplete="family-name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2 grid w-full items-center gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                autoComplete="organization"
                {...register("companyName")}
              />
            </div>
            <div className="sm:col-span-2 grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                autoComplete="tel"
                {...register("phoneNumber")}
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                autoComplete="postal-code"
                {...register("postalCode")}
              />
            </div>
            <div className="sm:col-span-2 grid w-full items-center gap-2">
              <Label htmlFor="country">Country</Label>
              <Select
                name="country"
                onValueChange={(value) => {
                  setValue("country", value);
                  trigger("country");
                }}
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country: { code: string; name: string }) => (
                    <SelectItem key={country.code} value={country.name}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2 grid w-full items-center gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} {...register("message")} />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
