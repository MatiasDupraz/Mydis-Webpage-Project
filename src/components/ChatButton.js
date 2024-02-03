import React,{useState} from 'react'
import classNames from 'classnames';

const ChatButton = () => {
  const [isChatboxVisible, setChatboxVisible] = useState(false);
  const [isCrossIconVisible, setCrossIconVisible] = useState(false);
  const [isChatIconVisible, setChatIconVisible] = useState(true);

  const initialFormState = {
    name: '',
    message: '',
}

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();


      const link = `https://api.whatsapp.com/send?phone=+543534175020&text=Hola soy ${formData.name} y mi consulta es: \n${formData.message}`
      window.open(link, '_blank');
      console.log(formData)
      setFormData(initialFormState)
    }


  const toggleChatbox = () => {
    setChatboxVisible((prevVisible) => !prevVisible);
    if(isChatboxVisible){
      setCrossIconVisible(false);
      setChatIconVisible(true);
    }
      else{
        setCrossIconVisible(true);
        setChatIconVisible(false);
      }
  };

    
    const finalformWraperClassName = classNames(`formbold-form-wrapper border border-gray-600 mx-auto ${
      isChatboxVisible ? '' : 'hidden'
    } w-full max-w-[550px] rounded-lg shadow-lg`)

    const finalCrossIconClassName = classNames(isCrossIconVisible ? '' : 'hidden')
    const finalChatIconClassName = classNames(isChatIconVisible ? '' : 'hidden')

  return (
    <div className='z-50 fixed bottom-0 right-0 flex justify-end items-end align-bottom pr-10 py-5'>


    <div class="relative">
      <div
        class={finalformWraperClassName}
      >
        <div
          class="flex items-center justify-between rounded-t-lg bg-neutral-900 py-4 px-9"
        >
          <h3 class="text-lg  text-gray-400">Comunicate con nosotros</h3>
          <button onClick={toggleChatbox} class="text-gray-400">
            <svg width="17" height="17" viewBox="0 0 17 17" class="fill-current">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
              />
            </svg>
          </button>
        </div>
        <form
          action="https://formbold.com/s/FORM_ID"
          method="POST"
          class="py-6 px-9 bg-neutral-900"
        >
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base  text-gray-400"
            >
              Tu nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ingresá tu nombre"
              value={formData.name}
              onChange={handleInputChange}
              class="w-full rounded-md  border border-gray-600 py-3 px-6 text-base bg-neutral-800 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
  
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base  text-gray-400"
            >
              Consulta
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Ingresá tu consulta"
              value={formData.message}
              onChange={handleInputChange}
              class="w-full resize-none rounded-md border border-gray-600 py-3 px-6 text-base bg-neutral-800 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button onClick={handleSubmit}
              class="hover:shadow-form w-full rounded-md bg-neutral-900 py-3 px-8 text-center text-base font-semibold text-gray-400 hover:text-gray-100 border border-gray-600 hover:border-gray-100 outline-none focus:border-[#6A64F1]"
            >
              Iniciar Chat
            </button>
          </div>
        </form>
      </div>
      <div
        class="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5"
      >
        <button
          class="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-neutral-900 text-white"
          onClick={toggleChatbox}
        >
          <span class={finalCrossIconClassName}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                fill="#9ca3af"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                fill="#9ca3af"
              />
            </svg>
          </span>
          <span class={finalChatIconClassName}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                fill="#9ca3af"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>

  )
}

export default ChatButton
