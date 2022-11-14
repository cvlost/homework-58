import React from "react";

export interface ButtonConfig {
  id: string;
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}