"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@shared/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/ui/components/form";
import { Input } from "@shared/ui/components/input";
import { Separator } from "@shared/ui/components/separator";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SSOButtons } from "@/components/auth/sso-buttons";
import {
  buttonScaleVariants,
  formContainerVariants,
  formItemVariants,
} from "@/styles/animation";

const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Please enter your password")
    .min(8, "Password must be at least 8 characters"),
});

type SignInValues = z.infer<typeof signInSchema>;

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(values: SignInValues) {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => setIsLoading(false), 1500);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to access your account
        </p>
      </div>

      <Form {...form}>
        <motion.form
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <motion.div variants={formItemVariants}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={formItemVariants}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="#"
                      className={`
                        text-primary text-xs
                        hover:underline
                      `}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        disabled={isLoading}
                        className="pr-10"
                        {...field}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        className={`
                          absolute top-1/2 right-2 size-7 -translate-y-1/2
                        `}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-4" />
                        ) : (
                          <Eye className="size-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            variants={buttonScaleVariants}
            whileHover={isLoading ? {} : { scale: 1.02 }}
            whileTap={isLoading ? {} : { scale: 0.98 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </motion.div>

          <motion.div
            variants={formItemVariants}
            className="flex w-full items-center gap-2"
          >
            <Separator className="flex-1" />
            <span className="text-muted-foreground text-xs">
              Or continue with
            </span>
            <Separator className="flex-1" />
          </motion.div>

          <SSOButtons />

          <motion.p
            variants={formItemVariants}
            className="text-muted-foreground text-center text-sm"
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className={`
                text-primary font-medium
                hover:underline
              `}
            >
              Sign up
            </Link>
          </motion.p>
        </motion.form>
      </Form>
    </div>
  );
}
