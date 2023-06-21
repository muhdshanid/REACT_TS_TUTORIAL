type StatusProps = {
    status: "loading" | "success" | "error"
}
const Status = ({status}: StatusProps) => {
    let message
    if(status === "loading") message = "Loading..."
    else if(status === "success") message = "Data fetched successfully"
    else if(status === "error") message = "Error while fetching data"
  return (
    <div>
        <h2>{message}</h2>
        
    </div>
  )
}

export default Status