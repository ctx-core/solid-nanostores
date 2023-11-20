import { atom_, type WritableAtom_ } from '@ctx-core/nanostores'
import { be_, ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_memo_tuple5_ } from '../index.js'
test('be_atom_memo_tuple5_', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, WritableAtom_<number>&{
		custom:string
	}>(()=>1)
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_atom_memo_tuple5_|+id|+is_source_', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, custom_T>(()=>1, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx
	})
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 2)
})
test('be_atom_memo_tuple5_|be', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, custom_T>(be_(()=>{
		const foobar$ = atom_(1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx
	}))
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 1)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 2)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = WritableAtom_<number>&{ custom:string }
