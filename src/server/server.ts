import { Events } from "../types/Events";

RegisterCommand(
  "hello",
  (source: string, args: string[]) => {
    CancelEvent();

    const name = GetPlayerName(source);

    setImmediate(() => {
      emitNet(Events.Hello, source, { source, name, args });
    });
  },
  false,
);
