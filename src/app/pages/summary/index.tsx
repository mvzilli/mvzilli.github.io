import Image from "next/image";

export default function Summary() {

    return (
        <div>
            <div>oi</div>
            <div style={{display: "inline"}}>
                <Image
                    src={"/frog.gif"}
                    alt="frog"
                    width={300}
                    height={300}
                    priority
                />
                <Image
                    src={"/duck.gif"}
                    alt="shark"
                    width={300}
                    height={300}
                    priority
                />
            </div>
        </div>
    )
}