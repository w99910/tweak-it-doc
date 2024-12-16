import Image from 'next/image'
import svg from './public/logo'

export default {
    logo: <div className="flex items-center gap-x-2" dangerouslySetInnerHTML={{ __html: svg }} ></div>,
    head: (
        <>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/icon64.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tweak It | Ultimate Web Styler Extension</title>
            <meta name="theme-color" content="#3FE3C2" />
            <meta name="description"
                content="Ultimate Web Styler Extension | Personalize Every Website Effortlessly with This Powerful Tool" />
            <link rel="canonical" href="https://tweakit.today" />
            <meta name="keywords"
                content="dark mode extension, web styler extension, Web Styler Extension, Transparent Background, Zen Browser Transparent, Change background color, Tweak Website, Web Customizer, Best Website Styler, Dark Zen browser extension, light mode, color scheme, Personalize website, Best Browser Extension, Change background color, change font size, adjust article width, adjust width in website, personalize website, change style, tweak it, tweak it extension" />
            <meta name="application-name" content="TweakIt" />
            <meta name="creator" content="Thomas Brillion" />
            <meta property="og:title" content="Tweak It | Ultimate Web Styler Extension" />
            <meta property="og:description"
                content="Ultimate Web Styler Extension | Personalize Every Website Effortlessly with This Powerful Tool" />
            <meta property="og:url" content="https://tweakit.today" />
            <meta property="og:image" content="/icon128.png" />
            <meta property="og:site_name" content="Tweak It" />
            <meta property="og:type" content="website" />
            <link rel="shortcut icon" href="/icon64.png" />
            <link rel="icon" href="/icon64.png" />
            <link rel="apple-touch-icon" href="/icon64.png" />
        </>
    ),
    darkMode: true,
    color: {
        hue: 168,
        saturation: 75,
        lightness: {
            dark: 57,
            light: 20
        }
    },
    feedback: {
        content: "Question? Send us an email."
    },
    editLink: {
        content: null,
    },
    backgroundColor: {
        dark: '#171717',
        light: '#333333',
    },
    footer: {
        component: <footer class="bg-green-gradient py-[5vh] items-center w-full flex justify-center">
            <div class="w-full flex flex-col items-center px-4 sm:w-10/12 md:w-9/12 lg:w-8/12 2xl:w-7/12">
                <img alt="logo" src="/logo.svg" />
                <h2 class="text-text-gray italic mt-4 font-medium px-4 text-lg text-center">Ultimate Web Styler Extension -
                    Your web,
                    your
                    style—redefined.</h2>
                <div class="flex sm:flex-row flex-col sm:gap-y-0 gap-y-12 w-full justify-center gap-x-24 mt-12">
                    <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                        <h2 class="text-primary text-lg">Product</h2>
                        <div class="flex flex-col gap-y-3 sm:gap-y-5">
                            <a href="/#features" class="no-underline">Features</a>
                            <a href="/#pricing" class="no-underline">Pricing</a>
                            <a href="/documentation" class="no-underline">Documentation</a>
                            <a href="/#why-us" class="no-underline">Why Us?</a>
                            <a href="https://www.linkedin.com/in/thomas-brillion/" class="no-underline">Creator</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                        <h2 class="text-primary text-lg">Support</h2>
                        <div class="flex flex-col gap-y-3 sm:gap-y-5">
                            <a href="/#frequently-asked-questions" class="no-underline">FAQs</a>
                            <a href="mailto:support@tweakit.today" target="_blank" class="no-underline">Contact Us</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                        <h2 class="text-primary text-lg">Legal</h2>
                        <div class="flex flex-col gap-y-3 sm:gap-y-5">
                            <a href="https://tweakit.today/privacy-policy" class="no-underline">Privacy Policy</a>
                            <a href="https://tweakit.today/terms-and-conditions" class="no-underline">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
                <p class="mt-20">© 2024 Tweak It. All right reserved.</p>
            </div>
        </footer>
    }
}