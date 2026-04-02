import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared/ui/components/avatar";
import { Button } from "@shared/ui/components/button";
import { Input } from "@shared/ui/components/input";
import { Label } from "@shared/ui/components/label";
import { Separator } from "@shared/ui/components/separator";
import { Textarea } from "@shared/ui/components/textarea";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-2">
          Manage your public profile information
        </p>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <Avatar className="size-20">
            <AvatarImage
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="User"
            />
            <AvatarFallback className="text-xl">U</AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" size="sm">
              Change Photo
            </Button>
            <p className="text-muted-foreground mt-1 text-xs">
              JPG, PNG or GIF. Max 2MB.
            </p>
          </div>
        </div>

        <Separator />

        {/* Form */}
        <form className="space-y-6">
          <div
            className={`
              grid gap-4
              sm:grid-cols-2
            `}
          >
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue="john@example.com"
              disabled
            />
            <p className="text-muted-foreground text-xs">
              Email cannot be changed
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="headline">Headline</Label>
            <Input
              id="headline"
              placeholder="e.g., Software Developer at Company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              rows={4}
            />
          </div>

          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  );
}
