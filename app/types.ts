export type RootStackPaamList = {
    "(tabs)": {
        screen: "index" | "deck" | "settings";
    };
    "Deck": { deckId: string };
    "+not-found": undefined;
};

export type TabParamList = {
    index: undefined;
    library: undefined;
    deck: { deckId: string }
}