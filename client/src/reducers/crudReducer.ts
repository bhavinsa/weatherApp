export enum Types {
    Create = "CREATE",
    Delete = "DELETE"
}

export type Action =
    | { type: Types.Create, payload: DataType }
    | { type: Types.Delete, id: number };

type DataType = {
    id: number;
    name: string;
    description: string;
};

export const productReducer = (
    state: DataType[],
    action: Action
) => {
    switch (action.type) {
        case Types.Create:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description
                }
            ];
        case Types.Delete:
            return [...state.filter(data => data.id !== action.id)];
        default:
            return state;
    }
};