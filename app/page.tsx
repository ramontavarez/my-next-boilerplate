import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Badge variant={"outline"}>Next.js</Badge>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">Next boilerplate</h1>

        <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl" data-br=":r3:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: 560 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta risus purus, vitae tristique sapien rutrum ut. Proin ornare tincidunt leo, id dapibus massa congue at.
        </span>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button>Button 1</Button>
          <Button variant={"outline"}>Button 2</Button>
        </div>
      </section>
    </div>
  );
}
