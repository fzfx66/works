window.dom = {
    create (string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after (node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibing);
    // 找到node父亲，让父亲找到儿子node，并在node的下一个节点的前面插入node2
    },
    before (node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append (parent, node) {
        parent.appendChild(node);
    },
    wrap (node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    // append插入元素到别的地方，元素会在原先的位置移除
    },
    remove (node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty (node) {
        // 用node. innerHTML = ''  也可，但没有返回值
        // 等价于 const childNodes  = node.childNodes
        // const {childNodes} = node
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    attr (node, name, value) {
        if (arguments.length === 3) node.setAttribute(name, value);
        else if (arguments.length === 2) node.getAttribute(name);
    },
    text (node, string) {
        if (arguments.length === 2) {
            if ("innerText" in node) node.innerText = string;
            else node.textContent = string;
        }
        if (arguments.length === 1) {
            if ("innerText" in node) return node.innerText;
            else return node.textContent;
        }
    },
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        if (arguments.length === 3) // dom.style(div,'color','red')
        node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === "string") //dom.style(div,'color')
            return node.style[name];
            else if (name instanceof Object) {
                // dom.style(div,{color:'red'})
                const object = name;
                for(let key in object)node.style[key] = object[key];
            }
        }
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classsList.remove(className);
        },
        has (node, className) {
            return node.className.contains(className);
        }
    },
    on (node, eventName, fn) {
        node.addEventListeneer(eventName, fn);
    },
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    find (selector, scope) {
        // find返回的是一个数组，用时一般后面加[0]
        return (scope || document).querySelectorAll(selector);
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    siblings (node) {
        return Array.from(node.parentNode.children).filter((n)=>n !== node);
    },
    next (node) {
        let x = node.nextSibling;
        while(x && x.nodeType === 3)x = x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType === 3)x = x.previousSibling;
        return x;
    },
    index (node) {
        const list = dom.children(node.parentNode);
        let i;
        for(i = 0; i < list.length; i++){
            if (list[i] === node) break;
        }
        return i;
    }
}; // window.dom.create = function(){};

//# sourceMappingURL=index.755bdb92.js.map
