import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GetGraph } from "./getGraph"
export const ShowGraph =  () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Graph
        </Button>
      </DialogTrigger>
      {/* width of dialog box */}
      <DialogContent className="sm:max-w-[900px] h-auto">
        <DialogHeader>
          <DialogTitle>Speed Test Results</DialogTitle>
          {/* <DialogDescription>
            Here are the results of speedtests run on the client.
          </DialogDescription> */}
        </DialogHeader>

        <GetGraph />
          
      </DialogContent>
    </Dialog>
  )
}