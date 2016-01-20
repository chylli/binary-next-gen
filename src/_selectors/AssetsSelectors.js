import { createSelector, createStructuredSelector } from 'reselect';

export const assetsSelector = state => state.assets;

export const marketTreeSelector = state => createSelector(
    assetsSelector,
    assets => {
        const tree = { };
        assets.forEach(sym => {
            if (!tree[sym.market]) {
                tree[sym.market] = { display_name: sym.market_display_name, submarkets: {} };
            }

            if (!tree[sym.market].submarkets[sym.submarket]) {
                tree[sym.market].submarkets[sym.submarket] = { display_name: sym.submarket_display_name, symbols: {} };
            }
            if (!tree[sym.market].submarkets[sym.submarket].symbols[sym.symbol]) {
                tree[sym.market].submarkets[sym.submarket].symbols[sym.symbol] = { display_name: sym.display_name };
            }
        });
        return tree;
    },
);

// export const submarketNameSelector = Object.keys(tree).map(market => {
//     const subs = tree[market].submarkets;
//     if (Object.keys(subs).indexOf(submarket) > -1) return subs[submarket].display_name;
// }).filter(name => !!name)[0];

// const submarketForAsset = symbol => list.find(x => x.symbol === symbol).submarket;

export default createStructuredSelector({
    assets: assetsSelector,
    marketTree: marketTreeSelector,
//    submarketName: submarketNameSelector,
});
