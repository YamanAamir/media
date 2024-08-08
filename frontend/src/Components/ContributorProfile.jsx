import React from 'react'

function ContributorProfile() {
    const profilePic = () => {

    }
    return (
        <form className='m-20 bg-gray-800 p-8 rounded-xl'>
            <div class="space-y-12 ">
                <div class="border-b border-gray-900/10 pb-12">


                    <div class="mt-4 flex md:flex-row flex-col-reverse justify-center items-center w-full ">
                        <div class="sm:col-span-4 md:w-1/2 w-full">
                            <h2 class="text-base font-semibold leading-7 text-white font-krona">Personal Information</h2>
                            {/* <   p class="mt-1 text-sm leading-6 text-white">Use a permanent address where you can receive mail.</p> */}

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium leading-6 text-white">First name</label>
                                    <div class="mt-2">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium leading-6 text-white">Last name</label>
                                    <div class="mt-2">
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-full">
                                    <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="col-span-full">
                                    <label for="street-address" class="block text-sm font-medium leading-6 text-white">Phone number</label>
                                    <div class="mt-2">
                                        <input type="number" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-full">
                                    <label for="email" class="block text-sm font-medium leading-6 text-white">Password</label>
                                    <div class="mt-2 relative">
                                        <input id="email" name="email" type="password" autocomplete="email" class="block w-full rounded-md border-0 py-2 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                        <button className='absolute font-mono top-0 right-0 text-white m-1 bg-indigo-600 rounded-md hover:px-5 duration-100 px-3 py-1'> RESET</button>
                                    </div>
                                </div>


                                {/* <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-white">Country</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div> */}


                                {/* 
                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="city" class="block text-sm font-medium leading-6 text-white">City</label>
                                    <div class="mt-2">
                                        <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="region" class="block text-sm font-medium leading-6 text-white">State / Province</label>
                                    <div class="mt-2">
                                        <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="postal-code" class="block text-sm font-medium leading-6 text-white">ZIP / Postal code</label>
                                    <div class="mt-2">
                                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-black outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                                    </div>
                                </div> */}
                            </div>
                        </div>


                        <div class="col-span-full md:w-1/2 w-full">
                            <label for="photo" class="block text-sm font-krona font-medium leading-6 text-center pb-4 text-white">Profile picture</label>
                            <div class="mt-2 flex flex-col justify-center rounded items-center gap-x-3">
                                <svg class="h-full w-1/3 text-white border rounded-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>
                                <button onClick={profilePic} type="button" class=" font-mono my-4 text-white py-2 bg-indigo-600 rounded-md hover:px-7 duration-100 px-3 py-1">CHANGE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-b border-gray-900/10 pb-12">

                </div>

            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-white font-krona">Cancel</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-krona">Save</button>
            </div>
        </form>
    )
}

export default ContributorProfile
