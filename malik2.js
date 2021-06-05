export function getContractBySearch(contractID:any, scope: IScope) {
    
    return {
      type: type.GET_CONTRACT_SEARCH,
      contractID,
      scope,
      payload: {
        contractID,
        scope
      }
    }
  }