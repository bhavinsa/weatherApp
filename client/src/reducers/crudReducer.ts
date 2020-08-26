export enum Types {
    Create = "CREATE",
    Delete = "DELETE",
    Update = 'UPDATE'
}

export type Action =
    | { type: Types.Create, payload: DataType }
    | { type: Types.Delete, id: number }
    | { type: Types.Update, payload: DataType };

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
        case Types.Update:
            const updateData = state.filter(data => {
                if (data.id == action.payload.id) {
                    data.name = action.payload.name
                    data.description = action.payload.description
                }
                return data
            })
            return updateData;
        default:
            return state;
    }
};