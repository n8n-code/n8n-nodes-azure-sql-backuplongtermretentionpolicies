import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlBackuplongtermretentionpolicies implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Backuplongtermretentionpolicies',
		name: 'N8nDevAzureSqlBackuplongtermretentionpolicies',
		icon: { light: 'file:./azure-sql-backuplongtermretentionpolicies.png', dark: 'file:./azure-sql-backuplongtermretentionpolicies.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manages Azure SQL Database backup long-term retention policy.',
		defaults: { name: 'Azure SQL Backuplongtermretentionpolicies' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlBackuplongtermretentionpoliciesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
