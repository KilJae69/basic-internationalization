"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending,startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change language</p>
      <select defaultValue={localeActive} disabled = {isPending} className="bg-transparent py-2" onChange={onSelectChange}>
        <option value="en">English</option>
        <option value="bs">Bosnian</option>
      </select>
    </label>
  );
}
