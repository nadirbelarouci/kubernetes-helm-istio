{{- define "database.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name .Values.database.name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
