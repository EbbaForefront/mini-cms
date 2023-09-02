import { writable } from "svelte/store";

export const sitedata = writable({ frontpage: 
                                { 
                                    header: 
                                    {
                                        style: {"fontSize": "text-xl", "fontWeight": "font-bold", "fontStyle": ""}, 
                                        text: "Header text" ,
                                        newStyle : {},
                                        newText: "",
                                        id:0
                                    },
                                        
                                    preamble: 
                                    { 
                                        style: {"fontSize": "text-sm", "fontWeight": "", "fontStyle": ""},
                                        text: "Preamble text text text text" ,
                                        newStyle : {},
                                        newText: "",
                                        id: 1
                                    }
                                }
                            });
                            
export const currentElement = writable({});
export const editMode = writable(false);