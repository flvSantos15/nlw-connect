"use client";

import { Link, Copy } from "lucide-react";

import { IconButton } from "@/component/icon-button";
import { InputRoot, InputIcon, InputField } from "@/component/input";

interface IInviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: IInviteLinkInputProps) {
  function handleCopyLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="https://devstage.com.br/invite/17f3-27h2-41f3-u734"
      />

      <IconButton className="-mr-2" onClick={handleCopyLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
