import { Events } from "../types/Events";

onNet(Events.Hello, ({ name, args }: { name: string; args: string[] }) => {
  SetNotificationTextEntry("STRING");
  AddTextComponentString(args.join(" "));
  SetNotificationMessage("CHAR_BANK_FLEECA", "CHAR_BANK_FLEECA", true, 0, `Hello ${name}`, "");
});
