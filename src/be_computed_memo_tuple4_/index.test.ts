import { atom_, computed_ } from '@ctx-core/nanostores'
import { ctx__new, MapCtx } from '@ctx-core/object'
import { atom } from 'nanostores'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_computed_memo_tuple4_ } from '../index.js'
test('be_computed_memo_tuple4_|+base_name|+computed__new|+be__params', ()=>{
	const base$ = atom_(1)
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		'foobar',
		()=>
			computed_(()=>
				base$() + 1),
		{ is_source_ })
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base$.$ = 2
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_computed_memo_tuple4_|+base_name|+computed__new|-be__params', ()=>{
	const base$ = atom_(1)
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		'foobar',
		()=>
			computed_(base$, base=>
				base + 1))
	const ctx = ctx__new()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
	base$.$ = 2
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_computed_memo_tuple4_|-base_name|+computed__new|+be__params', ()=>{
	const base$ = atom_(1)
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		()=>
			computed_(base$,
				base=>base + 1),
		{ is_source_ })
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base$.$ = 2
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_computed_memo_tuple4_|-base_name|+computed__new|-be__params', ()=>{
	const base$ = atom_(1)
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		()=>
			computed_(()=>base$() + 1))
	const ctx = ctx__new()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
	base$.$ = 2
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('coerces WritableAtom_ to ReadableAtom_ & WritableAtom to ReadableAtom', ()=>{
	const [foobar$_] = be_computed_memo_tuple4_(()=>
		atom(1))
	const ctx = ctx__new()
	// foobar$_(ctx).set(2)
	equal(foobar$_(ctx).get(), 2)
	equal(foobar$_(ctx).get() as string, 2)
})
test.run()
