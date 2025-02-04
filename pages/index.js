import { useSocket } from "@/context/socket";
import { useEffect } from "react";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    socket?.on( "connect", () => { console.log(socket.io) } );
  }, [socket]);
  
  return (
    <h1>hello</h1>  );
}
