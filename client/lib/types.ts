export type IFilterData =  {
    id : string | number,
    title : string,
    image? : string | NodeJS.Require
}

export type IDrawerItem = {
    icon: NodeJS.Require;
    label: string,
    url: any,
    name: string,
}