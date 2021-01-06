//shallowReactive(浅劫持) 与 reactive(深劫持)
const reactiveHandler = {
    get(target,prop){
        if(prop==="_is_reactive"){
            return true;
        }
        const result = Reflect.get(target,prop)
        console.log('拦截了读取数据：',prop);
        return result;
    },
    set(target,prop,value){
        const result = Reflect.set(target,prop,value);
        console.log('拦截了修改数据或添加属性',prop,value);
        return result;
    },
    deleteProperty(target,prop){
        const result = Reflect.deleteProperty(target,prop)
        console.log('拦截了删除数据：',prop);
        return result;
    }
}

function shallowReactive(target){
    if(target && typeof target === 'object'){
        return new Proxy(target,reactiveHandler)
    }
    return target
}

function reactive(target){
    if(target && typeof target === 'object'){
        //递归
        if(Array.isArray(target)){
            target.forEach((item,value)=>{
                target[index] = reactive(item)
            })
        }else{
            Object.keys(target).forEach((key)=>{
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target,reactiveHandler)
    }
    return target
}


//定义 shallowReadonly和 readonly

const readonlyhandler = {
    get(target,prop){
        if(prop==='_is_readonly'){
            return true
        }
        const result = Reflect.get(target,prop);
        console.log("拦截了读取数据：",prop);
        return result;
    },
    set(target,prop,value){
        console.warn("拦截了修改数据-该数据只读：",prop);
    },
    deleteProperty(target,prop){
        console.warn("拦截了删除数据-该数据只读：",prop);
    }
}

function shallowReadonly(target){
    if(target && typeof target === 'object'){
        return new Proxy(target,readonlyhandler)
    }
    return target;
}


function readonly(target){
    if(target && typeof target === 'object'){
        if(Array.isArray(target)){
            target.forEach((item,index)=>{
                target[index] = readonly(item)
            })
        }else{
            Object.keys(target).forEach(key=>{
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target,readonlyhandler);
    }
    return target;
}


//定义shallowRef 和 ref函数
function shallowRef(target){
    return {
        _value:target,
        get value(){
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val){
            console.log('劫持到了更新数据：',val);
            this._value = val
        }
    }
}

function ref(target){
    target = reactive(target)
    return {
        _is_ref:true,
        _value:target,
        get value(){
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val){
            console.log('劫持到了更新数据：',val);
            this._value = val
        }
    }
}



//定义isRef,isReactive,isReadonly,isProxy

function isRef(obj){
    return obj && obj._is_ref
}

function isReactive(obj){
    return obj && obj._is_reactive
}

function isReadonly(obj){
    return obj && obj._is_readonly
}

function isProxy(obj){
    return isReactive(obj) || isReadonly(obj)
}