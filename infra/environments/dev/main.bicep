targetScope = 'resourceGroup'

param location string = resourceGroup().location
param tenantId string
param tags object = {
  owner: 'axion-platform'
  classification: 'internal'
  lifecycle: 'dev'
  costCentre: 'stakeholder-crm'
}

resource identity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'id-axion-dev'
  location: location
  tags: tags
}

module vault '../../modules/key-vault.bicep' = {
  name: 'kv'
  params: {
    name: 'kv-axion-dev'
    location: location
    tenantId: tenantId
  }
}

output managedIdentityId string = identity.id
output keyVaultId string = vault.outputs.id

