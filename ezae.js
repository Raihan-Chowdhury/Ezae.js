const ISDEBUGON = (logic) => {
    if (logic == true) {
// SCRIPTS
        var links = SELECTALL('script').element
        links.forEach(e => {
            var link = e.src
            var split = link.split('/')
            var filename = split[split.length - 1]
            var Trytype = filename.split('.')
            var type = Trytype[Trytype.length - 1]
            ALERT.debug(`
            Filename : ${filename} 
            <br>
            Type : ${type}
            <br>
            <a style="color:white" href=${link} target="blank">Source link</a>
            `)

            console.debug(`::eze:debug::
Filename : ${filename} 
Type : ${type}
href=${link}
            `)
        });
// CSS
        var links = SELECTALL('link').element
        links.forEach(e => {
            var link = e.href
            var split = link.split('/')
            var filename = split[split.length - 1]
            var Trytype = filename.split('.')
            var type = Trytype[Trytype.length - 1]
            ALERT.debug(`
            Filename : ${filename} 
            <br>
            Type : ${type}
            <br>
            <a style="color:white" href=${link} target="blank">Source link</a>
            `)
            console.debug(`::eze:debug::
Filename : ${filename} 
Type : ${type}
href=${link}
            `)
        });
    }
}

function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function SELECT(selector) {
    const self = {
        element: document.querySelector(selector),
        give: (attrName, attr) => {
            self.element.setAttribute(attrName, attr);
            return self
        },
        inner: (textNode) => {
            self.element.innerHTML = textNode;
            return self
        },
        hide: () => {
            self.element.style.display = "none";
            return self
        },
        show: () => {
            self.element.style.display = "";
            return self
        },
        delete: () => {
            self.element.remove()
            return self
        },
        on: (event,callback) => {
            self.element.addEventListener(event, callback)
            return self;
        }
    }
    return self;
}
function SELECTALL(selector) {
    const self = {
        element: document.querySelectorAll(selector),
        give: (attrName, attr) => {
            self.element.forEach(e => e.setAttribute(attrName, attr));
            return self
        },
        inner: (textNode) => {
            self.element.forEach(e => e.innerHTML = textNode);           
            return self
        },
        hide: () => {
            self.element.forEach(e => e.style.display = "none");
            return self
        },
        show: () => {
            self.element.forEach(e=>e.style.display = "")
            return self
        },
        delete: () => {
            self.element.forEach(e => e.parentNode.removeChild(e));
            return self
        }
    }
    return self;
}


function CREATE(selector) {
    const self = {
        element: document.createElement(selector),
        inner: (textNode) => {
            self.element.innerHTML = textNode;
            return self
        },
        give: (attrName, attr) => {
            self.element.setAttribute(attrName, attr);
            return self
        }, 
        after: (p) => {
            var parent = document.querySelector(p);
            var element = self.element;
            insertAfter(element, parent);
            return self
        },
        before: (p) => {
            var parent = document.querySelector(p);
            var element = self.element;
            insertBefore(element, parent);
            return self
        },
        inside: (parent) => {
            document.querySelector(parent).appendChild(self.element)
            return self
        },
        insideTop: (s) => {
            document.querySelector(s).prepend(
                self.element
            )  
            return self
        },
        on: (event,callback) => {
            self.element.addEventListener(event, callback)
            return self;
        }
    }
    return self;
}

function UPDATE(selector) {
    const self = {
        element: document.querySelector(selector),
        inner: (textNode) => {
            self.element.innerHTML = textNode;
            return self
        },
        give: (attrName, attr) => {
            self.element.setAttribute(attrName, attr);
            return self
        }
    }
    return self;
}

const GET = (selector) => {
    const self = {
        element: document.querySelector(selector),
        class: () => {
            return self.element.className;
        },
        id: () => {
            return self.element.id;
        },
        value: () => {
            var value = self.element.textContent;
            var valueInput = self.element.value;
            if (value) return self.element.textContent;  
            else if (valueInput) return self.element.value;
        },
    }
    return self
}

// AUTO
const SETVARALL = (list) => {
    list.forEach(e => {
        SYNC(e)
    });
}
const GETKEY = () => {
    list = []
    for (let key in variable) {
        list.push(key)
    }
    SETVARALL(list)
}
const CONNECT = () => {
    GETKEY()
}

const SYNC = (Tvar) => {
    let node = eval(`variable.${Tvar}`)

    let a = document.querySelectorAll(`input[val="${Tvar}"]`)
    a.forEach(e => {
        e.value = node
    })

    SELECTALL(`variable[val="${Tvar}"]`).inner(node)
    
}

// DESIGN

const EZE_ALERT = `
    position: absolute;
    right: 10px;top : 30px;
    max-height: 90vh;
    overflow: hidden;
`
const EZE_ALERT_INSIDE_STYLE = `
    max-width: 40vw;
    word-wrap: break-word;
    opacity: 0%;display:block;
    margin-bottom:5vh;
    color: white;
    font-family: monospace;
    font-size: large;
    font-weight: bold;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    animation: alert 4s ;
    border-radius: 2vw;
    `
const ANIMATE = [
    {
        transform: "translateX(300px)",
        opacity: "50%"
    },
    {
        transform: "translateX(0px)",
        opacity: "90%"
    },
    {
        opacity: "100%"
    },
    {
        opacity: "100%"
    },
    {
        opacity: "100%"
    },
    {
        opacity: "50%"
    }
]

const getRandomColor = ()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
const ALERT = {
    debug: (txt) => {
        let ranInt = String("alertF"+Math.floor((Math.random() * 100000) + 1))
        if (SELECT('#EZE_ALERT').element != null) {
            CREATE('ezealert')
                .give("style",EZE_ALERT_INSIDE_STYLE+`background:${getRandomColor()}`)
                .give("id", "alertH3")
                .give("class", ranInt)
                .inner(txt).insideTop('#EZE_ALERT')
                .element.animate(ANIMATE, {
                    duration:5000
                })
            setTimeout(function () {
                SELECT(`.${ranInt}`).delete()
            }, 5000);
        }
        else {
            document.body.prepend(
                CREATE('div')
                    .give("id","EZE_ALERT")
                    .give("style", EZE_ALERT).element
            )
            CREATE('ezealert')
                .give("style",EZE_ALERT_INSIDE_STYLE+`background:${getRandomColor()}`)
                .give("id", "alertH3")
                .give("class", ranInt)
                .inner(txt).insideTop('#EZE_ALERT')
                .element.animate(ANIMATE, {
                    duration:5000
                })
            setTimeout(function () {
                SELECT(`.${ranInt}`).delete()
            }, 5000);
        }
    },
    warning: (txt) => {
        let ranInt = String("alertF"+Math.floor((Math.random() * 100000) + 1))
        if (SELECT('#EZE_ALERT').element != null) {
            CREATE('ezealert')
                .give("style",EZE_ALERT_INSIDE_STYLE+`background:tomato;border-radius:1vw;`)
                .give("id", "alertH3")
                .give("class", ranInt)
                .inner(txt).insideTop('#EZE_ALERT')
                .element.animate(ANIMATE, {
                    duration:5000
                })
            setTimeout(function () {
                SELECT(`.${ranInt}`).delete()
            }, 5000);
        }
        else {
            document.body.prepend(
                CREATE('div')
                    .give("id","EZE_ALERT")
                    .give("style", EZE_ALERT).element
            )
            CREATE('ezealert')
                .give("style",EZE_ALERT_INSIDE_STYLE+`background:tomato;border-radius:1vw;`)
                .give("id", "alertH3")
                .give("class", ranInt)
                .inner(txt).insideTop('#EZE_ALERT')
                .element.animate(ANIMATE, {
                    duration:5000
                })
            setTimeout(function () {
                SELECT(`.${ranInt}`).delete()
            }, 5000);
        }
    },
    success: (txt) => {
        let ranInt = String("alertF"+Math.floor((Math.random() * 100000) + 1))
        if (SELECT('#EZE_ALERT').element != null) {
            CREATE('ezealert')
                .give("style",EZE_ALERT_INSIDE_STYLE+`background:yellowgreen;border-radius:1vw;`)
                .give("id", "alertH3")
                .give("class", ranInt)
                .inner(txt).insideTop('#EZE_ALERT')
                .element.animate(ANIMATE, {
                    duration:5000
                })
            setTimeout(function () {
                SELECT(`.${ranInt}`).delete()
            }, 5000);
        }
        else {
            document.body.prepend(
                CREATE('div')
                    .give("id","EZE_ALERT")
                    .give("style", EZE_ALERT).element
            )
            CREATE('ezealert')
                .give("style",EZE_ALERT_INSIDE_STYLE+`background:yellowgreen;border-radius:1vw;`)
                .give("id", "alertH3")
                .give("class", ranInt)
                .inner(txt).insideTop('#EZE_ALERT')
                .element.animate(ANIMATE, {
                    duration:5000
                })
            setTimeout(function () {
                SELECT(`.${ranInt}`).delete()
            }, 5000);
        }
    }
}

