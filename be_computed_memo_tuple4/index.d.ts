import type { ReadableAtom_, StoreValues } from '@ctx-core/nanostores'
import type { Be, be__val__new_T, be_config_T, ctx__be_T, ctx__get_T, Ctx_wide_T } from 'ctx-core/be'
import type { AnyStore, ReadableAtom, Store, StoreValue, Task } from 'nanostores'
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(be:Be<computed_T, ns_T, ctx_T>):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	computed__new:be__val__new_T<val_T, ns_T, ctx_T>,
	config?:be_config_T<ns_T>
):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
	OriginStore extends Store<val_T> = Store<val_T>
>(
	stores__new:(ctx:ctx_T)=>OriginStore,
	val__new:(value:StoreValue<OriginStore>)=>Task<val_T>|val_T,
	config?:be_config_T<ns_T>
):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
	OriginStores extends AnyStore<val_T>[] = AnyStore<val_T>[]
>(
	stores__new:(ctx:ctx_T)=>OriginStores,
	val__new:(...values:StoreValues<OriginStores>)=>Task<val_T>|val_T,
	config?:be_config_T<ns_T>
):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export type be_computed_memo_tuple4_T<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
> = [
	ctx__be_T<computed_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]
