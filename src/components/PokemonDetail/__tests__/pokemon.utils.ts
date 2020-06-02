import { setEvolutionChain } from '../pokemon.utils';
import { chainResponse, expectedSetEvolutionChain, chainResponseNoChain, expectedChainResponseNoChain } from '../../../__mocks__/data';

describe('Set Evolution Chain', () => {

    it('with evolution chain', () => {
        const result = setEvolutionChain(chainResponse.chain);

        expect(result).toEqual(expectedSetEvolutionChain);
    });

    it('no evolution chain', () => {
        const result = setEvolutionChain(chainResponseNoChain.chain);

        expect(result).toEqual(expectedChainResponseNoChain);
    });
});