import { TbAlertTriangle, TbBlender, TbBug, TbBuildingCommunity, TbCalendarEvent, TbFileSmile, TbLamp, TbMap2, TbMessage2Question, TbMessageChatbot, TbNews, TbPalette, TbQrcode } from "react-icons/tb";
import Card from "./components/card";
import Line from "./components/line";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-xl text-black">Despatched Demons</h1>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbNews className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">News</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">What&apos;s new from us? Get up to date here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbFileSmile className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Administration</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">If you are feeling good enough to be part of us, send your join request here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbBuildingCommunity className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Community Clans</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">A sub-forum for a community inside community. We can say clans that are popular outside of Despatched Demons or you can make it here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbCalendarEvent className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center">
              <div className="bg-red-500 font-bold mr-2 px-2 rounded-full text-xs text-white">NEW</div>
              <h1 className="font-bold">Events</h1>
            </div>
            <Line/>
            <h1 className="text-sm text-gray-500">Check out the ongoing and upcoming events held by us</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbAlertTriangle className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Report Someone</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">Found violation from user(s)? Or you&apos;ve been molested by our crew? Please report here immediately</h1>
          </div>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-xl text-black">Development</h1>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbLamp className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Ideas & Suggestion</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">We are very open to cool ideas or even details concerning comfort. Your input means a lot to us</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbBug className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Bug & Error</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">Found a bug in our server that makes you inconvenient? Quick, send your report to our pest control</h1>
          </div>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-xl text-black">Creations</h1>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbMap2 className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Mapping</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">Show us your best map in here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbBlender className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Modding</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">3D modeller must come here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbQrcode className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Scripting</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">Wait, are you a programmer or a person who loves coding and have some fun works related to MTA SA? Show it off here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbPalette className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Designing</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">Do you love designing picture and don&apos;t know where to show it off? Don&apos;t worry, we got you here</h1>
          </div>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-xl text-black">General</h1>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbMessage2Question className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">FAQ</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">We know you have so much questions and don&apos;t want to bother to ask our crew member, so we compiled those frequently asked questions in here</h1>
          </div>
        </Card>
        <Card height={"h-auto"}>
          <div className="bg-gray-300 p-2 rounded-full">
            <TbMessageChatbot className="text-7xl"/>
          </div> 
          <div className="flex flex-col w-full">
            <h1 className="font-bold">General Discussion</h1>
            <Line/>
            <h1 className="text-sm text-gray-500">Want to talk nonsense about anything but out of MTA SA box? Maybe you want to share your feelings about someone in your real life or promoting your real life service job? Or maybe want to play a words game? We provided it all here</h1>
          </div>
        </Card>
      </div>
    </div>
  )
}
