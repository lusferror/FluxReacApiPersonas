import getState from './flux';
import { createContext, useState } from 'react';

export const Context = createContext(null);

const injectContext = PassedComponet=>{
    
    const StoreWrapper = props =>{
        const [ state, setState ] = useState(
            getState({
                getStore: ()=> state.store,
                getActions: ()=> state.actions, 
                setStore: updatedStore =>setState({
                    store: Object.assign(state.store , updatedStore),
                    actions: {...state.actions}
                }),
            }
        ))

        return(
            <Context.Provider value={state}>
                <PassedComponet {...props} />
            </Context.Provider>
        )

    }
    return StoreWrapper

}

export default injectContext;



