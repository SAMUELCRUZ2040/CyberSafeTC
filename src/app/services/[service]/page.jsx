import data from '@/json/data';

export default  function Template({ params }) {
  
  const counter = (id)=>{
    const services = data.services[0].servicesLogo;
    const consult = services.find(iterator => iterator.id === id);  
    return consult;
  }
  const service = counter(parseInt(params.service));

  console.log(service)

  return (
    <div className="flex justify-center items-center">
      <div className="container">
        {service.title}
      </div>
    </div>
  )
}
