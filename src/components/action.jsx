import Image from "next/image"

export default function Action() {
  const dataAction = [
    {
      picture : "",
      description : "asd",
      src : "asdd"
    },
    {
      picture : "",
      description : "asdasdas",
      src : "asdd"
    }
  ]
  return (
    <div className="fall__action flex justify-center items-center">
        <div className="container grid grid-cols-12 bg-[blue]">
            <div className="col-span-4 bg-[red]">
              <h2 className="flex  flex-col">
                <span>¿Y si nos</span>
                <span>reunimos?</span>
              </h2>
            </div>
            <div className="col-span-8 bg-[purple]">
              <div className="card grid grid-cols-12 bg-[yellow]" >
                {dataAction.map((datas, key)=>(
                  <div className="col-span-6 flex" key={key}>
                    <div className="picture ">
                        <Image 
                          src={""}
                          width={500}
                          height={500}
                          style={{width : "100%", height : "auto"}}
                          alt="asd"
                        />
                      </div>
                      <div className="description ">
                          <h2>{datas.description}</h2>
                      </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}
