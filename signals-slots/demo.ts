import { Signal } from "./src";

export const main = async () => {
  const sig = new Signal<string>();

  sig.connect((data: string) => {
    console.log(data);
  });

  sig.emit("hello");
};

main().then(() => {
  console.log("done");
});
