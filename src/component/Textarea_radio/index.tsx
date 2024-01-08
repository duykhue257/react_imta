import { useRef, useState } from 'react'
import Button from '../button'
import Border_text from '../border_text'


type Props = {
    option1: string,
    option2: string,
}


const Textarea_radio = ({ option1, option2 }: Props) => {
    const [tab, setTab] = useState(true)
    const Clicktab = (isSelected: boolean) => {
        setTab(isSelected)
    }

    const [text, setText] = useState('')

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textNew = event.target.value
        setText(textNew)
    }
    const chalectedCount = text.length

    

  
    return (
        <div >
            <div className='grid lg:grid-cols-2 gap-4 '>
                <button onClick={() => Clicktab(true)}
                    className={`${tab ? 'bg-green-400 text-white' : 'text-[#D0D0D0]'} p-3 rounded border-[#D0D0D0] border-2 font-bold `} >{option1}</button>
                <button onClick={() => Clicktab(false)}
                    className={`${tab ? 'text-[#D0D0D0]' : 'bg-green-400 text-white'} p-3 rounded border-[#D0D0D0] border-2 font-bold `}>{option2}</button>
            </div>
            {tab ? (
                <div>
                    <p className='text-[24px] font-bold my-3'>{option1}</p>
                    <textarea
                        
                        onChange={handleTextChange}
                        placeholder='Type or paste your writing topic here'
                        className='w-full rounded p-3 h-[200px] border border-2 border-black-500'  ></textarea>
                    <div className='flex justify-between'>
                        <svg className='' 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="16" width="14" 
                        viewBox="0 0 448 512">
                        <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
                        <p >{chalectedCount}/50</p>
                    </div>
                    <Button  type={'submit'} text={'Generate Quiz'} />
                    <Border_text text1={'IELTS Writing từ A -> Z'}
                        text2={'You will be allowed 1 hour to complete all 3 sections of the IELTS Academic or General Reading test. Prepare with our free materials.'} />
                </div>
            ) : (
                <div>
                    <p className='text-[24px] font-bold my-3'>{option2}</p>
                    <textarea
                        onChange={handleTextChange}
                        placeholder='Type or paste your reading topic here'
                        className='w-full rounded p-3 h-[200px] border border-2 border-black-500' ></textarea>
                        <div className='flex justify-between'>
                        <svg className='' 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="16" width="14" 
                        viewBox="0 0 448 512">
                        <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
                        <p>{chalectedCount}/50</p>
                    </div>
                    <Button type={'submit'} text={'Generate Quiz'} />
                    <Border_text text1={'IELTS Reading practice tests'}
                        text2={'Summarize the information by selecting and reporting the main features and make comparisons where relevant.'} />
                </div>
            )}
        </div>
    )
}

export default Textarea_radio