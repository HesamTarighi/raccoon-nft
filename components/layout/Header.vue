<template>
    <header class="w-full bg-primary text-fourth">
        <div class="w-lg mx-auto grid grid-cols-4 items-center pt-6 pb-2">
            <!-- logo -->
            <div>
                <a href="/">
                    Logo
                </a>
            </div>

            <!-- links -->
            <nav>
                <ul class="flex gap-10">
                    <li> <a href="/"> Home </a> </li>
                    <li> <a href="/"> About Us </a> </li>
                    <li> <a href="/"> FAQ </a> </li>
                </ul>
            </nav>

            <!-- profile and buttons and serach box -->
            <div class="flex justify-end items-center gap-6 col-span-2">
                <!-- search box -->
                <div>
                    <DisplayInput type="text" placeholder="Search artwork...">
                        <template #label>
                            <Icon name="fluent:search-20-filled" size="20px" />
                        </template>
                    </DisplayInput>
                </div>
                <!-- buttons -->
                <div>
                    <div class="flex gap-4">
                        <button class="btn btn-type__secondary rounded-full px-[10px] py-[5px] relative" aria-label="Inbox">
                            <span class="w-[10px] h-[10px] bg-third rounded-full absolute top-0 right-0"></span>
                            <Icon name="mdi:inbox" />
                        </button>
                        <button class="btn btn-type__secondary rounded-full px-[10px] py-[5px]" aria-label="Add new NFT"> <Icon name="material-symbols:new-window-rounded" /> </button>
                        <button class="btn btn-type__secondary rounded-full px-[10px] py-[5px]" aria-label="Wallet"> <Icon name="mdi:wallet-bifold-outline" /> </button>
                    </div>
                </div>
                <!-- profile -->
                <div>
                    <div class="w-[30px] h-[30px]">
                        <img src="~/assets/image/avatar2.jpg" class="rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
