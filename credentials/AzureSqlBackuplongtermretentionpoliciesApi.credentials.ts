import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlBackuplongtermretentionpoliciesApi implements ICredentialType {
        name = 'N8nDevAzureSqlBackuplongtermretentionpoliciesApi';

        displayName = 'Azure SQL Backuplongtermretentionpolicies API';

        icon: Icon = { light: 'file:../nodes/AzureSqlBackuplongtermretentionpolicies/azure-sql-backuplongtermretentionpolicies.png', dark: 'file:../nodes/AzureSqlBackuplongtermretentionpolicies/azure-sql-backuplongtermretentionpolicies.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Backuplongtermretentionpolicies API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
