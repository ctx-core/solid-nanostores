import type { ReadableAtom_, StoreValues } from '@ctx-core/nanostores'
import type { Be, be__val__new_T, be_config_T, Ctx } from '@ctx-core/object'
import type { AnyStore, ReadableAtom, Store, StoreValue, Task } from 'nanostores'

export declare function be_computed_memo_tuple4_<
	val_T,
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
>(be: Be<computed_T, ctx_T>):be_computed_memo_tuple4_T<val_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
>(computed__new:be__val__new_T<val_T>, config?:be_config_T):be_computed_memo_tuple4_T<val_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
    val_T,
    computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
    ctx_T extends Ctx = Ctx,
    OriginStore extends Store<val_T> = Store<val_T>
>(
    stores__new:(ctx:Ctx)=>OriginStore,
    val__new:(value:StoreValue<OriginStore>)=>Task<val_T> | val_T,
    config?:be_config_T
):be_computed_memo_tuple4_T<val_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
    val_T,
    computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
    ctx_T extends Ctx = Ctx,
    OriginStores extends AnyStore<val_T>[] = AnyStore<val_T>[]
>(
    stores__new:(ctx:Ctx)=>OriginStores,
    val__new:(...values:StoreValues<OriginStores>)=>Task<val_T> | val_T,
    config?:be_config_T
):be_computed_memo_tuple4_T<val_T, computed_T, ctx_T>
export type be_computed_memo_tuple4_T<
	val_T,
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<computed_T, ctx_T>,
	(ctx:ctx_T)=>val_T,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]
