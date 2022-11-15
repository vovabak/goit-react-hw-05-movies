import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
   return <span>
            <ThreeDots
               color="tomato"
           wrapperStyle={{
               justifyContent: 'center',
               marginTop: '50vh'
            }}               
            />
         </span >
}