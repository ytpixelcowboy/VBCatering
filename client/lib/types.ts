export type IFilterData =  {
    id : string | number,
    title : string,
    image? : string,
}

export type IDrawerItem = {
    icon: NodeJS.Require;
    label: string,
    url: any,
    name: string,
}