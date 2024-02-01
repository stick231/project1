let Moon = document.getElementById("Moon")
let MoonInfo = document.getElementById("MoonInfo")
let Items = document.getElementById("Items")
let ItemsInfo = document.getElementById("ItemsInfo")
let Bestiary = document.getElementById("Bestiary")
let BestiaryInfo = document.getElementById("BestiaryInfo")
let Storage = document.getElementById("Storage")
let StorageInfo = document.getElementById("StorageInfo")
let Other = document.getElementById("Other")
let OtherInfo = document.getElementById("OtherInfo")


function StyleBlockTerminal(HtmlElement){
    let LengthElement = HtmlElement.innerHTML.length + 5
    HtmlElement.style.width = `${LengthElement}ch`
    HtmlElement.style.display = "block"
    HtmlElement.style.borderRight = "4px solid #083812"
    HtmlElement.style.animation = `printed-text 0.2s steps(${LengthElement}),\n  flashing-border 0.25s step-start infinite`
}


function StyleBlockTerminalInfo(HtmlElement){
    let LengthElement = HtmlElement.innerHTML.length + 7
    HtmlElement.style.width = `${LengthElement}ch`
    HtmlElement.style.display = "block"
    HtmlElement.style.borderRight = "4px solid #083812"
    HtmlElement.style.animation = `printed-text 1s steps(${LengthElement}),\n  flashing-border 0.25s step-start infinite`
}


let ButtonTerminal = document.getElementById("ButtonTerminal")
ButtonTerminal.addEventListener("click", function () {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            ButtonTerminal.style.display = "None"
            StyleBlockTerminal(Moon)
            resolve()
        }, 100)
    })
        p.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    StyleBlockTerminalInfo(MoonInfo)
                    Moon.style.borderRight = ""
                    resolve()
                }, 500)
            })
        })
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        StyleBlockTerminal(Items)
                        MoonInfo.style.borderRight = ""
                        resolve()
                    }, 1100)
                })
                    .then(() => {
                        return new Promise((resolve) =>
                            setTimeout(() => {
                                StyleBlockTerminalInfo(ItemsInfo)
                                Items.style.borderRight = ""
                                resolve()
                            }, 500))
                    })
                    .then(() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                StyleBlockTerminal(Bestiary)
                                ItemsInfo.style.borderRight = ""
                                resolve()
                            }, 1100)
                        })
                            .then(() => {
                                return new Promise((resolve) => {
                                    setTimeout(() => {
                                        StyleBlockTerminalInfo(BestiaryInfo)
                                        Bestiary.style.borderRight = ""
                                        resolve()
                                    }, 500)
                                })
                                    .then(() => {
                                        return new Promise((resolve) => {
                                            setTimeout(() => {
                                                StyleBlockTerminal(Storage)
                                                BestiaryInfo.style.borderRight = ""
                                                resolve()
                                            }, 1100)
                                        })
                                            .then(() => {
                                                return new Promise((resolve) => {
                                                    setTimeout(() => {
                                                        StyleBlockTerminalInfo(StorageInfo)
                                                        Storage.style.borderRight = ""
                                                        resolve()
                                                    }, 500)
                                                })
                                            })
                                            .then(() => {
                                                return new Promise((resolve) => {
                                                    setTimeout(() => {
                                                        StyleBlockTerminal(Other)
                                                        StorageInfo.style.borderRight = ""
                                                        resolve()
                                                    }, 1100)
                                                })
                                            })
                                            .then(() => {
                                                return new Promise((resolve) => {
                                                    setTimeout(() => {
                                                        StyleBlockTerminalInfo(OtherInfo)
                                                        Other.style.borderRight = ""
                                                        resolve()
                                                    }, 500)
                                                })
                                            })
                                    })
                            })
                    })
                })
    })


function RequestToServer(){
    let WaitPage = document.getElementById("WaitPage")
    let RequestFound = document.getElementById("RequestFound")
    const p = new Promise((resolve) => {
        setTimeout(() => {
            WaitPage.style.display = "block"
            resolve()
        }, 100)
    })
    p.then(() =>{
        return new Promise((resolve) => {
            setTimeout(() =>{
                WaitPage.style.display = "none"
                RequestFound.style.display = "block"
                resolve()
            }, 3000)
        })
    })
        .then(()  => {
            return new Promise(() => {
                setTimeout(() => {
                    RequestFound.style.display = "None"
                }, 1500)
            })
        })
}


function ClickMoon(){
    let LiMoon = document.getElementById("Moons")
    let textConsole = document.getElementById("TextConsole")
    let BackButtonMoon = document.getElementById("BackButton")
    let MoonsN71 = document.getElementById("MoonsN71")
    const p = new Promise((resolve) => {
        setTimeout(() => {
            textConsole.style.display = "None"
            resolve()
        }, 100)
    })
    p.then(() => {
        setTimeout(() =>{
            RequestToServer()
        }, 500)
    })
        p.then(() => {
            setTimeout(() =>{
                LiMoon.style.display = "block"
                textConsole.style.display = "None"
                BackButtonMoon.style.display = "block"
                MoonsN71.style.display = "block"
            }, 5100)
        })
}


let Moons = document.getElementById("Moons")
let listElement = document.getElementById("MoonsN71")

function BackButtonClick(HtmlElementLi,HtmlElementInfo){
    let textConsole = document.getElementById("TextConsole")
    let BackButtonMoon = document.getElementById("BackButton")
    // HtmlElementInfo = document.getElementById(HtmlElementInfo) // Исправлено на listElement
    HtmlElementLi = document.getElementById(HtmlElementLi)
    HtmlElementLi.style.display = "none"
    HtmlElementInfo.style.display = "none"
    textConsole.style.display = "block"
    BackButtonMoon.style.display = "none"
}

function ClickBackButtonMoon(){
    BackButtonClick("Moons", listElement)
}
