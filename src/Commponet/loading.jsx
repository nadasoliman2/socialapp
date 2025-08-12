import { Audio } from 'react-loader-spinner'
export function Loading(){
    return(
        <>
        <div className="div flex justify-center items-center p-20">
      <Audio
  height="80"
  width="80"
  radius="9"
  color="blue"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
</div>
        </>
    )
}