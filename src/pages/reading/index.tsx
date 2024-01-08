import Textarea_radio from '../../component/Textarea_radio'
type Props = {}

const Reading = (props: Props) => {
    return (
        <div className='border border-1 mx-auto w-[1000px] mt-4 p-4 rounded'>
            <Textarea_radio option1='Writing Topic' option2='Reading Topic' />
        </div>
    )
}

export default Reading